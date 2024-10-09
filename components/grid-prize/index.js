'use client'
import React, { useState, useRef } from 'react'
import { LuckyGrid } from '@lucky-canvas/react'
import pony from 'public/prize/pony.jpg';
import skate from 'public/prize/skate.jpg';
import cake from 'public/prize/cake.jpg';
import bicycle from 'public/prize/bicycle.jpg';
import Image from "next/image";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

export default function GridPrize() {
    const [endPrize, setEndPrize] = useState(false);
    const [prizeSrc, setPrizeSrc] = useState('');
    const [blocks] = useState([
        { padding: '10px', background: '#869cfa' }
    ])
    const [prizes] = useState([
        { x:0,y:0,background: '#e9e8fe', fonts: [{ text: 'PONY' ,fontSize: '16px',top: '75%',fontColor: 'red'}],imgs: [{src: pony.src, width: '90%',height: '70%', top: '8%' }] },
        { x:1,y:0,background: '#e9e8fe', fonts: [{ text: 'skate' ,top: '75%',fontColor: 'red'}],imgs: [{src: skate.src, width: '90%',height: '70%', top: '8%' }] },
        { x:2,y:0,background: '#e9e8fe', fonts: [{ text: 'cake' ,top: '75%',fontColor: 'red'}],imgs: [{src: cake.src, width: '90%',height: '70%', top: '8%' }] },
        { x:2,y:1,background: '#e9e8fe', fonts: [{ text: 'bicycle' ,top: '75%',fontColor: 'red'}],imgs: [{src: bicycle.src, width: '90%',height: '70%', top: '8%' }] },
        { x:2,y:2,background: '#e9e8fe', fonts: [{ text: 'PONY' ,top: '75%',fontColor: 'red'}],imgs: [{src: pony.src, width: '90%',height: '70%', top: '8%' }] },
        { x:1,y:2,background: '#e9e8fe', fonts: [{ text: 'skate' ,top: '75%',fontColor: 'red'}],imgs: [{src: skate.src, width: '90%',height: '70%', top: '8%' }] },
        { x:0,y:2,background: '#e9e8fe', fonts: [{ text: 'cake' ,top: '75%',fontColor: 'red'}],imgs: [{src: cake.src, width: '90%',height: '70%', top: '8%' }] },
        { x:0,y:1,background: '#e9e8fe', fonts: [{ text: 'bicycle' ,top: '75%',fontColor: 'red'}],imgs: [{src: bicycle.src, width: '90%',height: '70%', top: '8%' }] },
    ])
    const [buttons] = useState([
        {
            x:1,y:1,
            background: 'red',
            fonts: [{ text: '开始',top: '35%',fontColor: '#3636f5' }]
        }
    ])
    const handleClose = () => {
        setEndPrize(!endPrize)
    };
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
                setPrizeSrc(prize.imgs[0].src)
                handleClose()
            }}
        />
        <Dialog
            open={endPrize}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"恭喜你中奖"}
            </DialogTitle>
            <DialogContent>
                <Image src={prizeSrc} alt={'prize'} width={200} height={100} />
            </DialogContent>
            <DialogActions>
                {/*<Button onClick={handleClose}>取消</Button>*/}
                <Button onClick={handleClose} autoFocus>
                    确认
                </Button>
            </DialogActions>
        </Dialog>
    </div>
}