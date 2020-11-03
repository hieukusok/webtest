import React, { Component } from 'react';
import axios from 'axios';
import Layout from './Layout';

class Home extends Component {
	constructor(props) {
		super();
		this.state = {
			sanpham: {
				id: '',
				dm_id: '',
				th_id: '',
				ten_sp: '',
				gia: '',
				chi_tiet: '',
				hinh: '',
				kha_dung: '',
				created_at: '',
				updated_at: ''
			}
		};
	}
	componentDidMount() {
		axios.get(`http://127.0.0.1:8000/api/sanpham/${this.props.match.params.id}`).then((res) => {
			const sanpham = res.data.data;
			this.setState({ sanpham });
		});
	}
	render() {
		return (
			<Layout>
				<header className="masthead" style={{ backgroundImage: `url(${this.state.sanpham.hinh})` }}>
					<div className="overlay" />
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-10 mx-auto">
								<div className="post-heading">
									<h1>{this.state.sanpham.ten_sp}</h1>
									<h2 className="subheading"></h2>
									<span className="meta">
										Posted by <a href="#!">Admin</a> on {this.state.sanpham.created_at}
									</span>
								</div>
							</div>
						</div>
					</div>
				</header>
				{/* Post Content */}
				<article>
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-10 mx-auto">
								<p>{this.state.sanpham.chi_tiet}</p>
							</div>
						</div>
					</div>
				</article>
			</Layout>
		);
	}
}

export default Home;
