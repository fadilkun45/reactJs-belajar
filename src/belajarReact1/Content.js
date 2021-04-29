import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Page2 from './Page2';

export default function Content() {
    return (
        <div class="container">
            <div class="judul">
                <h1>React</h1>
            </div>
            <aside class="contentA">
                <h4>React The future Technology</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium perferendis labore veniam iusto facere natus animi aspernatur consectetur minus cumque obcaecati architecto assumenda cupiditate blanditiis dolorum earum eaque officia reprehenderit nobis alias perspiciatis, possimus eum quaerat. Unde architecto distinctio enim!
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit quis molestiae nemo deleniti eum aliquam, iste nostrum distinctio accusantium?
                </p>
                <button>more info</button>
            </aside>
            <aside class="contentB">
                <h4>modern web with React</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium perferendis labore veniam iusto facere natus animi aspernatur consectetur minus cumque obcaecati architecto assumenda cupiditate blanditiis dolorum earum eaque officia reprehenderit nobis alias perspiciatis, possimus eum quaerat. Unde architecto distinctio enim!
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit quis molestiae nemo deleniti eum aliquam, iste nostrum distinctio accusantium?
                </p>
                <button to="/page2.js">more info</button>
            </aside>
            <aside class="penutup">
                <p>React Js seru Valid no debat</p>
            </aside>
        </div>
    )
}
