import { h, app } from 'hyperapp';

export default function SpecialMenu({ state, actions }) {
	return (
		<section id="SpecialMenu">
			<div className="container">
				<h5 className="comp-title"> special menu</h5>
				<h2>delicious flavors of autumn</h2>
				<div className="row">
					<div className="col-md-4">
						<div className="box boxes">
							<div className="box-img">
								<div className="price-circle">$25</div>
							</div>
							<span className="title">Super BBQ Grill No Smoke</span>
							<p className="details">
								Fried eggs, fried bacon, toast, fresh tomato salad, cup of
								coffee or tea
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="box">
							<div className="box-img">
								<div className="price-circle">$25</div>
							</div>
							<span className="title">Super BBQ Grill No Smoke</span>
							<p className="details">
								Fried eggs, fried bacon, toast, fresh tomato salad, cup of
								coffee or tea
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="box">
							<div className="box-img">
								<div className="price-circle">$25</div>
							</div>
							<span className="title">Super BBQ Grill No Smoke</span>
							<p className="details">
								Fried eggs, fried bacon, toast, fresh tomato salad, cup of
								coffee or tea
							</p>
						</div>
					</div>
					<a href="#" className="link">
						View full menu
					</a>
				</div>
			</div>
		</section>
	);
}
