import { h, app } from 'hyperapp';
import Header from './header';
import TopImg from './topImg';
import OurStory from './ourStory';
import SpecialMenu from './SpecialMenu';

export default function App({ state, actions }) {
	return (
		<div class={'app'}>
			<Header state={state} actions={actions} />
			<TopImg state={state} action s={actions} />
			<OurStory state={state} actions={actions} />
			<SpecialMenu state={state} actions={actions} />
		</div>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
