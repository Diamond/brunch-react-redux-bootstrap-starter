module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      },
      order: {
        before: ['vendor/tether.min.js', 'vendor/bootstrap.min.js']
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  plugins: {
    babel: {presets: ['es2015', 'react']},
    sass: {
      options: {
        includePaths: [
          'node_modules/bootstrap/scss'
        ]
      }
    }
  },
  npm: {
    globals: {
      $: 'jquery',
      jQuery: 'jquery',
      tether: 'tether'
    }
  }
};
