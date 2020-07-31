const getPosts = require('./data/profiles.json');
const getSpeakerPosts = require('./data/speakers.json');
const withImages = require('next-images')
module.exports = withImages({
    async exportPathMap(defaultPathMap) {
    const pathMap = {
        '/': { page: '/index' },
        '/code_of_conduct': { page: '/code_of_conduct' },
        '/contact_us': { page: '/contact_us' },
        '/organisers': { page: '/organisers' },
        '/speakers': { page: '/speakers' },
      };

    // now get the dynamic stuff:
    getPosts.map(post => {
      pathMap[`/profile/${post.id}`] = { page: '/profile/[id]' };
    });

    getSpeakerPosts.map(post => {
      pathMap[`/speaker/${post.id}`] = { page: '/speaker/[id]' };
    });
    return pathMap;
    },
  })
