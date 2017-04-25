module.exports = function(grunt){
  grunt.initConfig({
    pkg : grunt.file.readJSON( 'package.json' ),
      uglify : {
        build : {
          src : [ 'client/scripts/*.js',
            'client/scripts/**/*.js' ],
          dest : 'server/public/assets/scripts/client.min.js'
        }
      },

      copy : {
        scripts : {
          expand : true,
          cwd : 'client/',
          src : [ 'scripts/*.js', 'scripts/**/*.js' ],
          dest : 'server/public/assets'
        },
        html : {
          expand : true,
          cwd : 'client/views',
          src : [ 'index.html',
                  '**/*.html' ],
          dest : 'server/public/views/'
        },
        css : {
          expand : true,
          cwd : 'client/styles',
          src : [ 'style.css' ],
          dest : 'server/public/assets/styles/'
        },
        bootstrap : {
          expand : true,
          cwd : 'node_modules/bootstrap/dist/',
          src : [ 'css/bootstrap.css',
                  'js/bootstrap.js' ],
          dest : 'server/public/vendors/bootstrap/'
        },
        angular : {
          expand : true,
          cwd : 'node_modules/angular/',
          src : [ 'angular.js',
                  'angular.min.js',
                  'angular.min.js.map' ],
          dest : 'server/public/vendors/angular/'
        },
        angularRoute : {
          expand : true,
          cwd : 'node_modules/angular-route/',
          src : [ 'angular-route.js',
                  'angular-route.min.js',
                  'angular-route.min.js.map' ],
          dest : 'server/public/vendors/angular-route/'
        }
      },

      watch : {
        files : [
          'client/**/*.*'
        ],
        tasks : [ 'uglify', 'copy' ]
      }
  });

  // LOAD NPM TASKS - UGLIFY, COPY AND WATCH
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-copy' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // REGISTER TASKS UGLIFY, COPY AND WATCH
  grunt.registerTask( 'default', [ 'uglify', 'copy', 'watch' ]);
};
