import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	onSearchSubmit = async term => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		});

		this.setState({ videos: response.data.items });
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
