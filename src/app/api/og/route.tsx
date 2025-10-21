import { ImageResponse } from 'next/og'
import blogs from '../../../data/blogs.json'
import { Blog } from '@/src/types/blog'
import Image from 'next/image'

export const runtime = 'edge'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const blog = (blogs as Blog[]).find((b) => b.id === id)
    const domain = process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000';
    const title = blog?.title || 'PixelPrayer'
    // const cover = blog?.image || null
    const cover = blog?.image ? `${domain}${blog.image}` : 'https://via.placeholder.com/1200x630?text=My+Blog';


    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #fff, #f0f0f0)',
                    color: 'black',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '60px',
                    fontFamily: 'sans-serif',
                }}
            >
                {cover && (
                    <Image
                        src={cover}
                        alt=""
                        width="1200"
                        height="630"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            zIndex: 0,
                            opacity: 0.2,
                        }}
                    />
                )}
                <div
                    style={{
                        zIndex: 1,
                        textAlign: 'center',
                        fontSize: 64,
                        fontWeight: 800,
                        maxWidth: '90%',
                        background: 'rgba(255,255,255,0.75)',
                        borderRadius: 16,
                        padding: '20px 40px',
                    }}
                >
                    {title}
                </div>
            </div>
        ),
        { width: 1200, height: 630 }
    )
}
