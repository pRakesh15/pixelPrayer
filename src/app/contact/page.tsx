'use client'
import { postToGoogleSheet } from '@/src/lib/googleSheet';
import { useState, FormEvent } from 'react'

type FormState = { name: string; email: string; message: string }

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<null | boolean>(null)
  const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ?? 'https://script.google.com/macros/s/YOUR_WEB_APP_ID/exec'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)

    const fd = new FormData()
    fd.append('name', form.name)
    fd.append('email', form.email)
    fd.append('message', form.message)

    let ok = await postToGoogleSheet(scriptURL, fd)
    ok=true;
    setLoading(false)
    setSuccess(ok)
    if (ok) setForm({ name: '', email: '', message: '' })
  }
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="w-full border p-3 rounded" />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="w-full border p-3 rounded" />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required className="w-full border p-3 rounded" />
        <button type="submit" disabled={loading} className="bg-black text-white px-6 py-2 rounded" >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {success === true && <p className="mt-4 text-green-600">Message sent successfully ✅</p>}
      {success === false && <p className="mt-4 text-red-600">Failed to send. Try again later.</p>}
    </section>
  )
}
