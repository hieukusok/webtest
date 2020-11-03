import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';

class CTThuonghieu extends Component {
	constructor(props) {
		super();
		this.state = {
			ten_th: '',
			sanpham: []
		};
	}
	componentWillUnmount() {
		this.setState({ ten_dm: '', sanpham: [] });
	}
	componentDidMount() {
		axios.get(`http://127.0.0.1:8000/api/thuonghieu/${this.props.match.params.id}`).then((res) => {
			const sanpham = res.data.data.sanpham;
			const ten_th = res.data.data.ten_th;
			this.setState({ ten_th, sanpham });
		});
	}
	render() {
		return (
			<Layout>
				{/* Page Header */}
				<header className="masthead" style={{ backgroundImage: 'url("/img/a.jpg")' }}>
					<div className="overlay" />
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-10 mx-auto">
								<div className="site-heading">
									<h1 style={{ color: '#cc00ff' }}>{this.state.ten_th}</h1>
									<span className="subheading">A Blog Theme by Start Bootstrap</span>
								</div>
							</div>
						</div>
					</div>
				</header>
				{/* Main Content */}
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							{this.state.sanpham.map((sp) => (
								<>
									<div className="post-preview">
										<img src={`${sp.hinh}`} alt="" width="166" height="166" />
										<Link to={`/sanpham/${sp.id}`}>
											<h2 className="post-title">{sp.ten_th}</h2>
											<h3 className="post-subtitle">{sp.chi_tiet}</h3>
										</Link>
										<p className="post-meta">
											Posted by
											<a href="#">Start Bootstrap</a>
											on September 24, 2020
										</p>
									</div>
									<hr />
								</>
							))}
							{/* Pager */}
							<div className="clearfix">
								<a className="btn btn-primary float-right" href="#">
									Older Posts →
								</a>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default CTThuonghieu;
