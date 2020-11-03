import React, { Component } from 'react';
import Layout from './Layout';
import { connect } from 'react-redux';
import { dangnhapThunk } from '../thunks/authThunk';

const mapStateToProps = (state) => ({
	dangnhap: state.auth.dangnhap
});

const mapDispatchToProps = { dangnhapThunk };

class Dangnhap extends Component {
	constructor(props) {
		super();
		this.state = {
			tai_khoan: '',
			mat_khau: '',
			errorMessage: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		let name = event.target.name;
		let value = event.target.value;
		this.setState({
			[name]: value
		});
	}
	handleSubmit(event) {
		event.preventDefault();
		const { tai_khoan, mat_khau } = this.state;
		const dn = {
			tai_khoan: tai_khoan,
			mat_khau: mat_khau
		};
		this.props.dangnhapThunk(dn, this.props.history);
	}

	render() {
		return (
			<Layout>
				{/* Page Header */}
				<header className="masthead" style={{ backgroundImage: 'url("img/home-bg.jpg")' }}>
					<div className="overlay" />
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-10 mx-auto">
								<div className="site-heading">
									<h1>Dang nhap</h1>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							{/* Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. */}
							{/* WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! */}
							{/* To use the contact form, your site must be on a live web host with PHP! The form will not work locally! */}
							<form onSubmit={this.handleSubmit} name="sentMessage" id="contactForm">
								{this.state.errorMessage && (
									<div class="alert alert-danger" role="alert">
										Sai ten tai khoan va mat khau
									</div>
								)}

								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Tai khoan</label>
										<input
											value={this.state.tai_khoan}
											onChange={this.handleChange}
											type="text"
											className="form-control"
											placeholder="Tai khoan"
											id="Taikhoan"
											name="tai_khoan"
											required
											data-validation-required-message="Please enter your name."
										/>
										<p className="help-block text-danger" />
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Mat khau</label>
										<input
											value={this.state.mat_khau}
											onChange={this.handleChange}
											type="text"
											className="form-control"
											placeholder="Mat khau"
											id="Matkhau"
											name="mat_khau"
											required
											data-validation-required-message="Please enter your email address."
										/>
										<p className="help-block text-danger" />
									</div>
								</div>
								<br />
								<div id="success" />
								{this.props.dangnhap.isLoading ? (
									<button className="btn btn-primary" type="submit" disabled>
										<span
											className="spinner-grow spinner-grow-sm"
											role="status"
											aria-hidden="true"
										/>{' '}
										Loading...
									</button>
								) : (
									<button className="btn btn-primary" type="submit">
										Login
									</button>
								)}
							</form>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dangnhap);
