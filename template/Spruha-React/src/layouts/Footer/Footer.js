import React from 'react';
import { Link } from '@material-ui/core';
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => (

	<div className="main-footer text-center">
		<Container>
			<Row className="row-sm">
				<Col md={12} className="col-md-12">
					<span>Copyright © 2022 <Link href="#">FeedCorp</Link>. Design por <Link href="https://www.spruko.com/">Spruko.</Link> Todos os direitos reservados.</span>
				</Col>
			</Row>
		</Container>
	</div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
