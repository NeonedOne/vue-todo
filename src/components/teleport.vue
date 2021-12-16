<template>
    
    <div id="teleport">
            <a href="#A1" class="teleportbtn">ТЭУ&nbsp;/&nbsp;A1</a>
            <a href="#A2" class="teleportbtn">ТБУ&nbsp;/&nbsp;A2</a>
            <a href="#B1" class="teleportbtn">ТРКИ&#8209;I&nbsp;/&nbsp;B1</a>
            <a href="#B2" class="teleportbtn">ТРКИ&#8209;II&nbsp;/&nbsp;B2</a>
            <a href="#C1" class="teleportbtn">ТРКИ&#8209;III&nbsp;/&nbsp;C1</a>
            <a href="#C2" class="teleportbtn">ТРКИ&#8209;IV&nbsp;/&nbsp;C2</a>
    </div>
    
</template>

<style>
    #teleport{
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .teleportbtn {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    cursor: pointer;
    text-decoration: none;
    
    min-width: 130px;
    background: #7f0000;
    color:white;
    margin: 0.5em 1em;
    padding: 4px 10px;
    border: 1px solid #2B2B2B;

    text-align: center;
    }
    .teleportbtn:hover{
        background: white;
        
        color:black;
    }
</style>