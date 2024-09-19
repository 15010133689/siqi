'use client'

// 包裹整个app的错误处理，与同级别的error.js不冲突,error.js是子集，global-error.js只有在生产环境中生效
export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <h2>GlobalError:{error.message}</h2>
                <button onClick={() => reset()}>重试</button>
            </body>
        </html>
    )
}