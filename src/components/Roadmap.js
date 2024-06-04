import React from 'react';
import { Link } from 'react-router-dom';
import img from './splash.jpg';

export default function Roadmap() {
  return (
    <div className='roadmapContainer'>
        <div className='roadmapHero'>
            <h1 className='roadmapTitle1'>Roadmapa</h1>
            <h1 className='roadmapTitle2'>lekcji</h1>
            <span>Ta roadmapa przedstawia tematy, które poruszyliśmy na laboratoriach oraz wykładach na przedmiocie "Interfejs w aplikacjach internetowych"</span>
            <img className='roadmapSplash' src={img} alt='splash'/>
        </div>
      <div className="roadmapShadow"></div>
      <div className='roadmapStepsContainer'>
        <div className='roadmapStepContainer'>
            <div id='roadmap1' className='roadmapStageContainer'>
                <div className='roadmapFoot'></div>
                <div className='roadmapHead'></div>
            </div>
            <div id='roadmapTitle1' className='roadmapStageTitle'>
                <Link className='roadmapLink' to="/react">React</Link>
                <span className='roadmapStageSubTitle'>Krok 1</span>
            </div>
        </div>

        <div className='roadmapStepContainer'>
            <div id='roadmap2' className='roadmapStageContainer'>
                <div className='roadmapFoot'></div>
                <div className='roadmapHead'></div>
            </div>
            <div id='roadmapTitle2' className='roadmapStageTitle'>
                <Link to="/styling">Styling</Link>
                <span className='roadmapStageSubTitle'>Krok 2</span>
            </div>
        </div>

        <div className='roadmapStepContainer'>
            <div id='roadmap3' className='roadmapStageContainer'>
                <div className='roadmapFoot'></div>
                <div className='roadmapHead'></div>
            </div>
            <div id='roadmapTitle3' className='roadmapStageTitle'>
                <Link to="/hooks">Hooks</Link>
                <span className='roadmapStageSubTitle'>Krok 3</span>
            </div>
        </div>

        <div className='roadmapStepContainer'>
            <div id='roadmap4' className='roadmapStageContainer'>
                <div className='roadmapFoot'></div>
                <div className='roadmapHead'></div>
            </div>
            <div id='roadmapTitle4' className='roadmapStageTitle'>
                <Link to="/redux">Redux</Link>
                <span className='roadmapStageSubTitle'>Krok 4</span>
            </div>
        </div>

        <div className='roadmapStepContainer'>
            <div id='roadmap5' className='roadmapStageContainer'>
                <div className='roadmapFoot'></div>
                <div className='roadmapHead'></div>
            </div>
            <div id='roadmapTitle5' className='roadmapStageTitle'>
                <Link to="/routing">Routing</Link>
                <span className='roadmapStageSubTitle'>Krok 5</span>
            </div>
        </div>

        <div className='roadmapStepContainer'>
            <div id='roadmap6' className='roadmapStageContainer'>
                <div className='roadmapFoot'></div>
                <div className='roadmapHead'></div>
            </div>
            <div id='roadmapTitle6' className='roadmapStageTitle'>
                <Link to="/axios">Axios</Link>
                <span className='roadmapStageSubTitle'>Krok 6</span>
            </div>
        </div>


      </div>

    </div>
  );
}

