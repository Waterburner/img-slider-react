import React, { Component, Fragment } from 'react';

import Card from './Card.js';

class Deck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: [],
            number_of_cards_by_index: 2
        }
    }

    componentDidMount() {
        const new_cards = [];

        for (let i = 0; i <= this.state.number_of_cards_by_index; i++) {
            new_cards.push(
                <Card picsum={`https://picsum.photos/600/${350 + i}`} />
            )
        }

        this.setState({ cards: new_cards }, () => {
            let img_width_as_percentage = 50;
            // img_width_as_percentage = window.innerWidth < 768 ? 100 : img_width_as_percentage;

            this.new_width =
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
                    (img_width_as_percentage / 100) * window.screen.width :
                    (img_width_as_percentage / 100) * window.innerWidth;

            this.view_port.style.width = `${this.new_width}px`;

            window.addEventListener('resize', () => {
                img_width_as_percentage = 50;
                // img_width_as_percentage = window.innerWidth < 768 ? 100 : img_width_as_percentage;

                this.new_width =
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
                        (img_width_as_percentage / 100) * window.screen.width :
                        (img_width_as_percentage / 100) * window.innerWidth;

                this.view_port.style.width = `${this.new_width}px`;

                this.order_cards();
            });

            this.order_cards();
        });
    }

    order_cards = () => {
        const card_width = parseFloat(styles.view_port.width),
            middle_card_by_index = Math.floor(this.state.number_of_cards_by_index / 2);
        let counter_for_right = 1,
            counter_for_left = middle_card_by_index;

        for (let i = 0; i < this.images.children.length; i++) {
            this.images.children[i].style.transitionDuration = '0.0s';

            if (i < middle_card_by_index) {
                this.images.children[i].style.left = `-${(counter_for_left * this.new_width) - (this.new_width / 2)}px`;
                counter_for_left--;
            } else if (i > middle_card_by_index) {
                this.images.children[i].style.left = `${(counter_for_right * this.new_width) + (this.new_width / 2)}px`;
                counter_for_right++;
            } else {
                this.images.children[i].style.left = `${this.new_width / 2}px`;
            }
        }
    }

    render() {
        return (
            <Fragment>
                <button id="prev">Prev</button>
                <button id="next">Next</button>
                <div ref={ref_id => this.touch_area = ref_id} style={styles.touch_area} className="touch_area"></div>
                <div ref={ref_id => this.view_port = ref_id} style={styles.view_port} className="view_port">
                    <div ref={ref_id => this.images = ref_id} style={styles.images_container} className="images_container">
                        {this.state.cards}
                    </div>
                </div>
            </Fragment>
        )
    }
}

const styles = {
    view_port: {
        margin: 0,
        padding: 0,
        width: '500px',
        height: '300px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden'
    },
    images_container: {
        margin: 0,
        padding: 0,
        width: 'inherit',
        height: 'inherit',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    touch_area: {
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '300px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        zIndex: 9999
    },
}

export default Deck;