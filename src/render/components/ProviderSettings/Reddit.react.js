class redditSettings extends Component {

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(Themes.bing)
    }
  }

  static propTypes = {
    styles: React.PropTypes.object.isRequired,
    updateSettings: React.PropTypes.func.isRequired,
    score: React.PropTypes.number.isRequired,
    sort: React.PropTypes.string.isRequired,
    from: React.PropTypes.string.isRequired,
    subreddit: React.PropTypes.string.isRequired
  }

  render() {
    const { styles, region, updateSettings } = this.props
    return (
      <div >
        <SelectField
          value={region}
          onChange={(event, index, region) => updateSettings({'bing-region': region})}
          {...styles.feild}
          floatingLabelText='Region'
          fullWidth={true}
        >
          {
            Providers.bing.regionOptions.map(({code, text}, idx) => <MenuItem key={idx + 1} value={code} primaryText={text}/>)
          }
        </SelectField>
      </div>
    )
  }
}