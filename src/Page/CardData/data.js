import React from "react"
import Leave from "../../components/Assets/Images/leaf.webp"
import Lamp from "../../components/Assets/Images/lamp.webp"


export const data = [
    {
        id: 0,
        title: "Session Leaf",
        img: Leave,
        alt: "Session Leaf",
        url: "/leaf",
        html: <pre>
            <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaf</title>
</head>
<body>
<div class="background-leaf ">
        <div class="leaf-head">
            <div class="left-leaf"></div>
            <div class="leaves">
                <div class="right-leaf"></div>
            </div>
        </div>
    </div>
</body>
</html>`}   </code>
        </pre>,
        css: <pre>
        <code>{`<style>
        * {
            margin: 0px;
            padding: 0px;
        }

        .background-leaf {
            margin: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            transition: 0.6s;
            background: #b8e986;
        }

        .leaf-head {
            display: flex;
            position: relative;
            transition: 0.6s;
        }

        .left-leaf {
            width: 100px;
            height: 100px;
            border-radius: 250px 0px;
            transform: rotate(-90deg);
            position: absolute;
            top: 20%;
            left: -50%;
            transition: 0.6s;
            background: #003c00;
        }

        .leaves {
            width: 100px;
            height: 100px;
            border-radius: 250px 0px;
            transform: rotate(-45deg);
            margin: 0px 0px 0px 0px;
            transition: 0.6s;
            background: #006900;
        }

        .right-leaf {
            width: 100px;
            height: 100px;
            border-radius: 250px 0px;
            transform: rotate(45deg);
            position: absolute;
            top: 50%;
            z-index: -1;
            left: 20%;
            transition: 0.6s;
            background: #2caa00;
        }
</style>`}   </code>
    </pre>,
    },
    
    {
        id: 1,
        title: "Dark Room Lamp",
        img: Lamp,
        alt: "Dark Room Lamp",
        url: "/lamp",
        html: <h5 className="">"Hello" <br /> people</h5>,
    },
]