<template>
<ul >
<li>
</li>
</ul>
</template>
<script lang="ts">

class ProjectsData {
  public  Projects: Project[] = [];
}

import { Project } from '../components/Types';
export default {
  name: 'Projects',
  data(): ProjectsData { return {
      Projects: [],
    };
  },

methods: {
loadProjects: () => {
      let c = '';
      c = c + 'ast';
    },
},


created: () => {
//console.log('created');
   let c = '';
   c = c + 'ast';
},
};
</script>