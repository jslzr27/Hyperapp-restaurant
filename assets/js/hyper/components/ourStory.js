import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
	return (
		<section id="ourStory">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h5 className="comp-title">Our Story</h5>
						<h2>Cooking is the art of adjustment</h2>
						<p>
							Hexagon prism banh mi man braid bespoke before they sold out
							pitchfork. Schlitz vaporware food truck small batch hot chicken
							poke craft beer venmo bicycle rights brooklyn hell of air plant.
							Gastropub master cleanse actually, +1 kitsch narwhal selfies
							activated charcoal trust fund etsy. Kombucha echo park meh bespoke
							gastropub ennui yuccie slow-carb shaman post-ironic prism. Enamel
							pin meh tbh butcher. Chillwave you probably haven't heard of them
							8-bit, brooklyn leggings flexitarian hella kale chips godard
							franzen tofu succulents crucifix.
						</p>
						<div className="quote">
							<i>
								"The best steak in town" - <strong> Thomas Eggsy</strong>
							</i>
						</div>
						<a href="#" className="reserve-btn">
							Reserve
						</a>
					</div>
					<div className="col-md-6">
						<div className="video-img">
							<img
								src="https://images.pexels.com/photos/1327215/pexels-photo-1327215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
								alt="cooking"
							></img>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
