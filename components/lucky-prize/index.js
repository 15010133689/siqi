'use client'
import React, { useState, useRef } from 'react'
import { LuckyWheel } from '@lucky-canvas/react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import Image from "next/image";
import pony from "../../public/prize/pony.jpg";
import skate from "../../public/prize/skate.jpg";
import cake from "../../public/prize/cake.jpg";
import bicycle from "../../public/prize/bicycle.jpg";

export default function LuckyPrize() {
    const [endPrize, setEndPrize] = useState(false);
    const [prizeText, setPrizeTest] = useState('');
    const [blocks] = useState([
        { padding: '10px', background: '#869cfa' }
    ])
    const [prizes] = useState([
        { background: '#e9e8fe', fonts: [{ text: '1',fontSize:'25px', top:'10%' }] },
        { background: '#b8c5f2', fonts: [{ text: '2',fontSize:'25px', top:'10%' }] },
        { background: '#e9e8fe', fonts: [{ text: '3',fontSize:'25px', top:'10%' }] },
        { background: '#b8c5f2', fonts: [{ text: '4',fontSize:'25px', top:'10%' }] },
        { background: '#e9e8fe', fonts: [{ text: '5',fontSize:'25px', top:'10%' }] },
        { background: '#b8c5f2', fonts: [{ text: '6',fontSize:'25px', top:'10%'  }] },
        { background: '#e9e8fe', fonts: [{ text: '7',fontSize:'25px', top:'10%'  }] },
        { background: '#b8c5f2', fonts: [{ text: '8',fontSize:'25px', top:'10%'  }]},
        { background: '#e9e8fe', fonts: [{ text: '9',fontSize:'25px', top:'10%'  }]},
        { background: '#b8c5f2', fonts: [{ text: '10',fontSize:'25px', top:'10%'  }] },
        { background: '#e9e8fe', fonts: [{ text: '11',fontSize:'25px', top:'10%'  }] },
        { background: '#b8c5f2', fonts: [{ text: '12',fontSize:'25px', top:'10%'  }] },
        { background: '#e9e8fe', fonts: [{ text: '13',fontSize:'25px', top:'10%'  }] },
        { background: '#b8c5f2', fonts: [{ text: '14',fontSize:'25px', top:'10%'  }] },
        { background: '#e9e8fe', fonts: [{ text: '15',fontSize:'25px', top:'10%'  }] },
        { background: '#b8c5f2', fonts: [{ text: '16',fontSize:'25px', top:'10%'  }] },
        { background: '#e9e8fe', fonts: [{ text: '17',fontSize:'25px', top:'10%'  }] },
        { background: '#b8c5f2', fonts: [{ text: '18',fontSize:'25px', top:'10%'  }] },
        { background: '#e9e8fe', fonts: [{ text: '19',fontSize:'25px', top:'10%'  }] },
        { background: '#b8c5f2', fonts: [{ text: '20',fontSize:'25px', top:'10%'  }] },
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
    const handleClose = () => {
        setEndPrize(!endPrize)
    };
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
                    const index = Math.random() * 20 >> 0
                    myLucky.current.stop(index)
                }, 2500)
            }}
            onEnd={prize => { // 抽奖结束会触发end回调
                setPrizeTest(prize.fonts[0].text)
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
                <Typography variant={'h4'} sx={{color:'blue'}}>恭喜你中奖</Typography>
            </DialogTitle>
            <DialogContent>
                <Typography variant={'h1'} sx={{color:'red'}}>请弹琴{prizeText}遍</Typography>
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