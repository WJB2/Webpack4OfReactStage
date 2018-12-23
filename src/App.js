import React from 'react';
const background = require('./../assets/background.jpg');
import ImageView from '../src/components/imageview';


const images = [
    require('../assets/background.jpg'),
    'http://dingyue.nosdn.127.net/lXMRCRbP9PYbv2gMBmHGXRnjspn6pT1PM5DrIGcEZSUTu1531904526913compressflag.jpeg',
    'http://dingyue.nosdn.127.net/9sFTTWDQoHjxyIkU9wzm8CiDNVbq48Mwf2hyhgRghxA5O1527909480497compressflag.jpeg',
    'http://img.zcool.cn/community/0101f856cfff206ac7252ce6214470.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503235534249&di=4c198d5a305627d12e5dae4c581c9e57&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F0529%2F0529-17277.jpg',
  ];

export default class App extends React.Component{

    state={
        open:false
    }
    
    handleOpen=()=>{
        this.setState({
            open:true
        })
    }

    handleClose=()=>{
        this.setState({
            open:false
        })
    }

    render(){
        return(
        <div className="header">
            <div 
                style={{width:'100px',height:'100px',backgroundColor:'pink'}}
                onClick={this.handleOpen}    
            >
                打开
            </div>
            <ImageView isOpen={this.state.open} images={images} onClose={this.handleClose}/>
        </div>
        )
    }
}
 