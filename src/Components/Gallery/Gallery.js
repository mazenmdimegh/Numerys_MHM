import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "./Gallery.scss";
import a from '../../assets/03.png';
import b from '../../assets/bg_moto.png';

// const imgUrls = ['https://mhm-motors-image-assets-dev.s3.eu-west-1.amazonaws.com/motor/images/av.png',
// 'https://mhm-motors-image-assets-dev.s3.eu-west-1.amazonaws.com/motor/images/av.png',
// 'https://mhm-motors-image-assets-dev.s3.eu-west-1.amazonaws.com/motor/images/av.png',
// 'https://mhm-motors-image-assets-dev.s3.eu-west-1.amazonaws.com/motor/images/av.png',
//  ];

// const imgUrls = [a,b, 'https://www.themilliardaire.com/wp-content/uploads/2021/07/aston-martin-brough-superior-amb-001-moto-8-800x600.jpg',
//     'https://mhm-motors-image-assets-dev.s3.eu-west-1.amazonaws.com/motor/images/av.png',
//     'https://sf2.auto-moto.com/wp-content/uploads/sites/9/2018/05/yamaha-700-mt-07-2018-700px-700x410.jpg'
// ];

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentIndex: null };
        this.closeModal = this.closeModal.bind(this);
        this.findNext = this.findNext.bind(this);
        this.findPrev = this.findPrev.bind(this);
        this.renderImageContent = this.renderImageContent.bind(this);
    }
    renderImageContent(src, index) {
        return (
            <div id={"img" + index.toString()} onClick={(e) => this.openModal(e, index)}>
                <img src={src} key={src} />
            </div>
        )
    }
    openModal(e, index) {
        this.setState({ currentIndex: index });
    }
    closeModal(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState({ currentIndex: null });
    }
    findPrev(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    }
    findNext(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }
    render() {
        const imgUrls = [];
        const { imgs } = this.props;
        for (let i = 0; i < imgs.length; i++) {
            imgUrls.push(imgs[i]['small']);
        }
        // console.log(imgUrls);
        // const imgUrl = [imgs[0]['small'], imgs[0]['small'], imgs[0]['small'], imgs[0]['small'], imgs[0]['small']];
        if (imgUrls.length == 4) {
            return (
                <div className="gallery-container">

                    <div className="gallery-grid flex">
                        <div id={"img0"} onClick={(e) => this.openModal(e, 0)}>
                            <img src={imgUrls[0]} key={imgUrls[0]} />
                        </div>
                        <div className='grid'>
                            <div>
                                <div id={"img1"} onClick={(e) => this.openModal(e, 1)}>
                                    <img src={imgUrls[1]} key={imgUrls[1]} />
                                </div>
                            </div>
                            <div className='flex widhflex'>
                                <div id={"img2"} onClick={(e) => this.openModal(e, 2)}>
                                    <img src={imgUrls[2]} key={imgUrls[2]} />
                                </div>
                                <div id={"img3"} onClick={(e) => this.openModal(e, 3)}>
                                    <img src={imgUrls[3]} key={imgUrls[3]} />
                                </div>
                            </div>

                        </div>
                        {/* {imgUrls.map(this.renderImageContent)} */}
                    </div>
                    <GalleryModal
                        closeModal={this.closeModal}
                        findPrev={this.findPrev}
                        findNext={this.findNext}
                        hasPrev={this.state.currentIndex > 0}
                        hasNext={this.state.currentIndex + 1 < imgUrls.length}
                        src={imgUrls[this.state.currentIndex]}
                    />
                </div>);
        } else if (imgUrls.length == 3) {
            return (
                <div className="gallery-container">

                    <div className="gallery-grid3 flex">
                        <div id={"img0"} onClick={(e) => this.openModal(e, 0)}>
                            <img src={imgUrls[0]} key={imgUrls[0]} />
                        </div>
                        <div className='grid'>

                            <div id={"img1"} onClick={(e) => this.openModal(e, 1)}>
                                <img src={imgUrls[1]} key={imgUrls[1]} />
                            </div>


                            <div id={"img2"} onClick={(e) => this.openModal(e, 2)}>
                                <img src={imgUrls[2]} key={imgUrls[2]} />
                            </div>



                        </div>
                    </div>
                    <GalleryModal
                        closeModal={this.closeModal}
                        findPrev={this.findPrev}
                        findNext={this.findNext}
                        hasPrev={this.state.currentIndex > 0}
                        hasNext={this.state.currentIndex + 1 < imgUrls.length}
                        src={imgUrls[this.state.currentIndex]}
                    />
                </div>)
        } else if (imgUrls.length > 4) {
            return (
                <div className="gallery-container">

                    <div className="gallery-grid flex">
                        <div id={"img0"} onClick={(e) => this.openModal(e, 0)}>
                            <img src={imgUrls[0]} key={imgUrls[0]} />
                        </div>
                        <div className='grid'>
                            <div>
                                <div id={"img1"} onClick={(e) => this.openModal(e, 1)}>
                                    <img src={imgUrls[1]} key={imgUrls[1]} />
                                </div>
                            </div>
                            <div className='flex widhflex'>
                                <div id={"img2"} onClick={(e) => this.openModal(e, 2)}>
                                    <img src={imgUrls[2]} key={imgUrls[2]} />
                                </div>
                                <div className='flex' id={"img33"} onClick={(e) => this.openModal(e, 3)}>
                                    <div className='plus'>
                                        {(imgUrls.length > 5) ? (
                                            <p >+ {imgUrls.length - 4} Photos</p>
                                        ) : (<p >+ 1 Photo</p>)

                                        }

                                    </div>
                                    <img src={imgUrls[3]} key={imgUrls[3]} />

                                </div>
                            </div>

                        </div>
                    </div>
                    <GalleryModal
                        closeModal={this.closeModal}
                        findPrev={this.findPrev}
                        findNext={this.findNext}
                        hasPrev={this.state.currentIndex > 0}
                        hasNext={this.state.currentIndex + 1 < imgUrls.length}
                        src={imgUrls[this.state.currentIndex]}
                    />
                </div>)
        } else if (imgUrls.length == 1 ) {
            return (
                <div className="gallery-container">

                    <div className="gallery-grid3 flex">
                        <div id={"img0"} onClick={(e) => this.openModal(e, 0)}>
                            <img src={imgUrls[0]} key={imgUrls[0]} />
                        </div>
                    </div>
                    <GalleryModal
                        closeModal={this.closeModal}
                        findPrev={this.findPrev}
                        findNext={this.findNext}
                        hasPrev={this.state.currentIndex > 0}
                        hasNext={this.state.currentIndex + 1 < imgUrls.length}
                        src={imgUrls[this.state.currentIndex]}
                    />
                </div>
            )
        }
        return (
            <div className="gallery-container">

                <div className="gallery-grid flex">
                    <div id={"img0"} onClick={(e) => this.openModal(e, 0)}>
                        <img src={imgUrls[0]} key={imgUrls[0]} />
                    </div>
                    <div id={"img0"} onClick={(e) => this.openModal(e, 1)}>
                        <img src={imgUrls[1]} key={imgUrls[1]} />
                    </div>
                </div>
                <GalleryModal
                    closeModal={this.closeModal}
                    findPrev={this.findPrev}
                    findNext={this.findNext}
                    hasPrev={this.state.currentIndex > 0}
                    hasNext={this.state.currentIndex + 1 < imgUrls.length}
                    src={imgUrls[this.state.currentIndex]}
                />
            </div>
        )
    }
}

class GalleryModal extends React.Component {
    constructor() {
        super();
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e) {
        if (e.keyCode === 27)
            this.props.closeModal();
        if (e.keyCode === 37 && this.props.hasPrev)
            this.props.findPrev();
        if (e.keyCode === 39 && this.props.hasNext)
            this.props.findNext();
    }
    render() {
        const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
        if (!src) {
            // console.log('whut')
            return null;
        }
        return (
            <div>
                <div className="modal-overlay" onClick={closeModal}></div>
                <div isOpen={!!src} className="modal">
                    <div className='modal-body'>
                        <a href="#" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
                        {hasPrev && <a href="#" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
                        {hasNext && <a href="#" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
                        <img src={src} />
                    </div>
                </div>

            </div>
        )
    }
}
export default Gallery;