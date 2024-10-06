'use client'
import React, { useState, useRef } from 'react'
import { LuckyWheel } from '@lucky-canvas/react'

export default function LuckyPrize() {
    const [blocks] = useState([
        { padding: '10px', background: '#869cfa' }
    ])
    const [prizes] = useState([
        { background: '#e9e8fe', fonts: [{ text: 'JAVA' }] },
        { background: '#b8c5f2', fonts: [{ text: 'REACT' }] },
        { background: '#e9e8fe', fonts: [{ text: 'NEXTJS' }] },
        { background: '#b8c5f2', fonts: [{ text: 'SPRING' }] },
        { background: '#e9e8fe', fonts: [{ text: 'ES' }]},
        { background: '#b8c5f2', fonts: [{ text: 'REDIS' }] },
    ])
    const [buttons] = useState([
        { radius: '40%', background: '#617df2' },
        { radius: '35%', background: '#afc8ff' },
        {
            radius: '30%', background: '#869cfa',
            pointer: true,
            fonts: [{ text: '开始', top: '-10px' }]
        }
    ])
    const myLucky = useRef()
    return <div>
        <LuckyWheel
            ref={myLucky}
            width="300px"
            height="300px"
            blocks={blocks}
            prizes={prizes}
            buttons={buttons}
            onStart={() => { // 点击抽奖按钮会触发star回调
                myLucky.current.play()
                setTimeout(() => {
                    const index = Math.random() * 6 >> 0
                    myLucky.current.stop(index)
                }, 2500)
            }}
            onEnd={prize => { // 抽奖结束会触发end回调
                alert('恭喜你抽到 ' + prize.fonts[0].text + '')
            }}
        />
    </div>
}