import node from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'lodash.subset.js',
  dest: 'index.js',
  format: 'iife',
  plugins: [
    uglify(),
    node({
      jsnext: true
    })
  ]
};
