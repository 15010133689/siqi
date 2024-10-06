'use client'
import React, { useState, useRef } from 'react'
import { LuckyGrid } from '@lucky-canvas/react'

export default function GridPrize() {
    const [blocks] = useState([
        { padding: '10px', background: '#869cfa' }
    ])
    const [prizes] = useState([
        { x:0,y:0,background: '#e9e8fe', fonts: [{ text: 'JAVA' ,top: '35%',fontColor: 'blue'}] },
        { x:1,y:0,background: '#e9e8fe', fonts: [{ text: 'SPRING' ,top: '35%',fontColor: 'blue'}] },
        { x:2,y:0,background: '#e9e8fe', fonts: [{ text: 'REDIS' ,top: '35%',fontColor: 'blue'}] },
        { x:2,y:1,background: '#e9e8fe', fonts: [{ text: 'RABBITMQ' ,top: '35%',fontColor: 'blue'}] },
        { x:2,y:2,background: '#e9e8fe', fonts: [{ text: 'MYSQL' ,top: '35%',fontColor: 'blue'}] },
        { x:1,y:2,background: '#e9e8fe', fonts: [{ text: 'ES' ,top: '35%',fontColor: 'blue'}] },
        { x:0,y:2,background: '#e9e8fe', fonts: [{ text: 'NEXTJS' ,top: '35%',fontColor: 'blue'}] },
        { x:0,y:1,background: '#e9e8fe', fonts: [{ text: 'REACT' ,top: '35%',fontColor: 'blue'}] },
    ])
    const [buttons] = useState([
        {
            x:1,y:1,
            background: 'red',
            fonts: [{ text: '开始',top: '35%',fontColor: '#3636f5' }]
        }
    ])
    const myLucky = useRef()
    return <div>
        <LuckyGrid
            ref={myLucky}
            width="300px"
            height="300px"
            blocks={blocks}
            prizes={prizes}
            buttons={buttons}
            onStart={() => { // 点击抽奖按钮会触发star回调
                myLucky.current.play()
                setTimeout(() => {
                    const index = Math.random() * 8 >> 0
                    myLucky.current.stop(index)
                }, 2500)
            }}
            onEnd={prize => { // 抽奖结束会触发end回调
                alert('恭喜你抽到 ' + prize.fonts[0].text + '')
            }}
        />
    </div>
}