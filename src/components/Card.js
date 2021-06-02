import React, { Component, useDebugValue } from 'react';
// import photo1 from "../../static/assets/photos/asadodepuerco";
// import photo2 from "../../static/assets/photos/barbacoatacos";
// import photo3 from "../../static/assets/photos/beeffaitaquesadilla";
// import photo4 from "../../static/assets/photos/buritos";
// import photo5 from "../../static/assets/photos/burritounwrapped";
// import photo6 from "../../static/assets/photos/cheesburger";

export default function() {

    // images for slider
const img1="{photo1}";
const img2="{photo2}";
const img3="{photo3}";
const img4="{photo4}";
const img5="{photo5}";
const img6="{photo6}";

// array of images for slider
var photos = [];
photos = [img1, img2, img3, img4, img5, img6];



    // "active" front "selected" image index = default center
var active_index = Math.floor(photos.length/2);

    //image on the center ("active" or "selected")
var center_img_active = photos[active_index];

    //image on the left and right from active
var left_img = photos[active_index-1];
var right_img = photos[active_index+1];

    // refresh center image
function refresh_center_img() {
    center_img_active = photos[active_index];
}

    //refresh left and right image
function refresh_side_img() {

    if (active_index>0) { // refresh left side img
        left_img = photos[active_index-1];
    } else {
        left_img = null;
    }

    if (active_index<photos.length) { //refresh right side img
        right_img = photos[active_index+1];
    } else {
        right_img = null;
    }
}

    // default slider when page loads
function refresh_img_slider() {
    refresh_center_img();
    refresh_side_img();
}

    // for left arrow button, to move one pic to the left
function move_one_img_left() {
    event.preventDefault();
    if (active_index > 0) {
        active_index = active_index-1;
        refresh_img_slider();
    }

    // testing
    console.log("left", left_img);
    console.log("center", center_img_active);
    console.log("right", right_img);

}

    // for right arrow button, to move one pic to the right
function move_one_img_right() {
    if (active_index < photos.length) {
        active_index = active_index+1;
        refresh_img_slider();
    }
}


function move_one_img_handle(event) {
    if (event.keyCode == 37) {
        move_one_img_left();
    }

    if (event.keyCode == 39) {
        move_one_img_right();
    }

}

    
    React.useEffect(() => {
    
        window.addEventListener('keydown', move_one_img_handle );
    });
    

// =====================testing

// const handleKeyDown = (event) => {
    //     console.log('A key was pressed', event.keyCode);
    // };
    
    // React.useEffect(() => {
    
    //     window.addEventListener('keydown', handleKeyDown );
    // });
    
    // =============== end of testing
        
        return (
            <div className="actual_slider-container">
            <div className="actual_slider">
                <div className="slider-item arrow arrow-left">left</div>
                <div className="slider-item picture_on_the_left">
                    {left_img}
                </div>
                <div className="slider-item picture_on_the_center">
                    {center_img_active}
                </div>
                <div className="slider-item picture_on_the_right">
                    {right_img}
                </div>
                <div className="slider-item arrow arrow-right">right</div>
            </div>
        </div>
    );
    
    
}