import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2>页面未找到</h2>
            <p>无法找到请求资源</p>
            <Link href="/">返回首页</Link>
        </div>
    )
}