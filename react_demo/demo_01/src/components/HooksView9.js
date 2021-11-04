import React, { useEffect, useRef, useState, useCallback } from 'react';

// 获取浏览器窗口大小
function useWinSize() {
    const [size, setSize] = useState({
        with: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    })

    // useCallback 缓存方法，执行一次缓存
    const onResize = useCallback(() => {
        setSize({
            with: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    }, [])

    useEffect(() => {
        console.log('================监听=================== ');
        // addEventListener 三个参数，
        window.addEventListener('resize', onResize);

        // 销毁取消监听
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [])

    return size

}

function  HooksView9() {
    const size = useWinSize()

    return (
        <div>
            <h1>
            HooksView9 + useCallback自定义hooks事件
            </h1>
            浏览器页面size: {size.with}*{size.height}
        </div>
    )
}

export default HooksView9;
