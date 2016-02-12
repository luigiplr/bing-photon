import ls from 'local-storage'
import alt from '../alt'
import Themer from '../themes/themer'
import AppActions from '../actions/appActions'



class AppStore {
	constructor() {
		this.bindActions(AppActions)

		this.providers = ['bing', 'reddit']
		this.provider = ls.get('provider') || this.providers[0]

		this.theme = Themer.getTheme(this.provider)

		this.autoSync = true
		this.syncOptions = ['Every Hour', 'Every Day', 'Bi-Daily', 'Every Week', 'Every Month']
		this.sync = ls.get('sync') || this.syncOptions[0].toLowerCase().replace(' ', '_')

		this.resolutionOptions = [{
			value: '1920_1080',
			text: '1080p (1920 × 1080)'
		}, {
			value: '1280_720',
			text: '720p (1280 x 720)'
		}]
		this.resolution = ls.get('resolution') || this.resolutionOptions[0].value


		/* Reddit Options */

		this.subReddit = ls.get('subReddit') || null

		this.sortOptions = ['top', 'hot', 'new', 'controversial']
		this.sort = ls.get('sort') || this.sortOptions[0]

		this.fromOptions = ['hour', 'day', 'week', 'month', 'all']
		this.from = ls.get('from') || this.fromOptions[0]


		/* Bing Options */

		this.regionOptions = [{
			code: 'en-US',
			text: 'North America',
		}, {
			code: 'zh-CN',
			text: 'Europe'
		}, {
			code: 'ja-JP',
			text: 'Asia'
		}]

		this.region = ls.get('region') || this.regionOptions[0].code
	}


	/* Core */

	onProviderChange(provider) {
		this.provider = provider
		ls.set('provider', provider)
		this.theme = Themer.getTheme(provider)
	}

	onAutoSyncChange(autoSync) {
		ls.set('autoSync', autoSync)
		this.autoSync = autoSync
	}

	onSyncTimeoutChange(sync) {
		ls.set('sync', sync)
		this.sync = sync
	}

	onResolutionChange(resolution) {
		ls.set('resolution', resolution)
		this.resolution = resolution
	}


	/* Reddit */

	onFromChange(from) {
		ls.set('from', from)
		this.from = from
	}

	onSortChange(sort) {
		ls.set('sort', sort)
		this.sort = sort
	}

	onSubredditChange(subReddit) {
		ls.set('subReddit', subReddit)
		this.subReddit = subReddit
	}


	/* Bing */

	onRegionChange(region) {
		ls.set('region', region)
		this.region = region
	}

}

export default alt.createStore(AppStore)