import React from 'react'
import './style.css'
const Typo = () => {
  return (
    <div className='main'>
    <h1 className="font-serif text-4xl">
        Font Family  
    </h1>
    <div>
    <p className="font-sans">
    The quick brown fox jumps "sans"
    </p>
    <p className="font-mono">
    The quick brown fox jumps "mono"</p>
    <p className="font-serif">
    The quick brown fox jumps "serif"
    </p>
    <p className="font-thin">
    The quick brown fox jumps "thin font"
    </p>
    <p className="font-semibold">
        The quick brown fox jumps "semi bold"
    </p>
    
    <p className="font-bold">
        The quick brown fox jumps "bold"
    </p>
    
    <p className="font-medium">
        The quick brown fox jumps "medium"
    </p>

  <p className="font-medium hover:font-mono">
        The quick brown fox jumps "change on hover"
    </p>
    <p className="font-nova">
        The quick brown fox jumps "font nova"
    </p>
    <p className="font-dosis">
        The quick brown fox jumps "font dosis"
    </p>
    <p className="font-press">
        The quick brown fox jumps "font press"
    </p>
    <p className="font-sacramento">
        The quick brown fox jumps <span>...</span>  "font sacramento"
    </p>
    <p className="font-noto">
        The quick brown fox jumps "font Pacifico"
    </p>
    <p className="font-bungee">
        The quick brown fox jumps "font bungee"
    </p>

    <p className="mt-4 text-3xl font-press">Font Size</p>

      <p className="text-xs"> 
      The quick brown fox jumps "xs"
      </p>
      
      <p className="text-sm"> 
      The quick brown fox jumps "sm"
      </p>
      
      <p className="text-base"> 
      The quick brown fox jumps "base"
      </p>
      
      <p className="text-lg"> 
      The quick brown fox jumps "lg"
      </p>
      
      <p className="text-xl"> 
      The quick brown fox jumps "xl"
      </p>
      
      <p className="text-2xl"> 
      The quick brown fox jumps "2xl"
      </p>
      
      <p className="text-3xl"> 
      The quick brown fox jumps "3xl"
      </p>
    
      <p className="flex text-4xl"> 
      The quick brown fox jumps "4xl custome"
      </p>
    </div>
    <div className="mt-10 pt-6">
       <p className="font-bungee pb-4">Font smoothing</p> 
        <p className="font-dosis text-lg">
        The quick brown fox ... "normal" 
       
        </p>
        <p className="font-dosis antialiased text-lg">
        The quick brown fox ... "antialiased" 
        </p>
        <p className="font-dosis text-lg subpixel-antialiased">
            The quick brown fox ... "subpixel-antialiased" 
        </p>
    </div>
    <div className="mt-10 pt-6">
       <p className="font-mono pb-4 text-lg">Font style</p> 
        <p className="font-dosis text-lg not-italic">
        The quick brown fox ... "normal" 
       
        </p>
        <p className="font-dosis antialiased text-lg italic">
        The quick brown fox ... "italic" 
        </p>
    </div>

    <div className="mt-8 p-8 ">
        <p className="font-press pb-6">
        Font weight
        </p>
        <p className="font-thin">
        The quick brown fox ... "thin"
        </p>
        <p className="font-extralight">
        The quick brown fox ... "extralight"
        </p>
        <p className="font-light">
        The quick brown fox ... "light"
        </p>
        <p className="font-normal">
        The quick brown fox ... "normal"
        </p>
        <p className="font-medium">
        The quick brown fox ... "medium"
        </p>
        <p className="font-semibold">
        The quick brown fox ... "semibold"
        </p>
        <p className="font-bold">
        The quick brown fox ... "bold"
        </p>
        <p className="font-extrabold">
        The quick brown fox ... "extrabold"
        </p>
        <p className="font-black font-bungee">
        The quick brown fox ... "black"
        </p>
        <p className="font-[1100]">
        The quick brown fox ... "arbitrary 1100"
        </p>

        <div className="mt-8 p-8">
        <p className="font-black font-bungee">
            Font Variant Numeric
        </p>
        <p className="normal-nums">
        123 2/2 1st 0 "normal"
        </p>
        <p className="ordinal">
        123 2/2  1st 0 "ordinal"
        </p>
        <p className="oldstyle-nums">
        123 2/2  1st  0 "oldstyle-nums"
        </p>
        <p className="slashed-zero">
        123 2/2 1st  0 "slashed-zero"
        </p>
        <p className="lining-nums">
        123 2/2 1st 0 "lining-nums"
        </p>
        <p className="roportional-nums">
        123 2/2 1st  0 "roportional-nums"
        </p>
        <p className="roportional-nums">
        1234 2/2 1st  0 "roportional-nums"
        </p>
        <p className="tabular-nums">
        123 2/2 1st 0 "tabular-nums"
        </p>
        <p className="diagonal-fractions">
        123 2/2 1st 0 "diagonal-fractions"
        </p>  
        <p className="stacked-fractions">
        123 2/2 1st 0 "stacked-fractions"
        </p>
        <p class="stacked-fractions ...">
  1/2 3/4 5/6
</p>
        </div>
        

    </div>
    </div>
  )
}

export default Typo