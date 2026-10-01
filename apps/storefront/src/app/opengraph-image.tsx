import { ImageResponse } from 'next/og'

export const size = {
   width: 1200,
   height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
   return new ImageResponse(
      (
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               width: '100%',
               height: '100%',
               padding: '80px',
               backgroundColor: '#0c1f16',
               color: '#f5f5f4',
               fontFamily: 'sans-serif',
            }}
         >
            <div style={{ fontSize: 40, color: '#a7f3d0', marginBottom: 16 }}>
               Crawl-Smart Catalogue
            </div>
            <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
               Sustainable desk accessories for small spaces
            </div>
            <div style={{ fontSize: 32, color: '#d6d3d1', marginTop: 24 }}>
               Bamboo stands · Recycled organizers · Cork mats · Class prototype
            </div>
         </div>
      ),
      { ...size }
   )
}
