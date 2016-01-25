import DS from 'ember-data';


export default DS.Model.extend({
    path:	 DS.attr(),  // dir name relative to workspace_url_path
    content: DS.attr(),  // fetched by afterMethod in route.js
});
