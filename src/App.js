import React,{lazy,Suspense} from 'react';
import Normal from './components/Normal';
import FallbackCmp from './components/FallbackCmp';
//import Lazy from './components/Lazy';
const LazyCmp=lazy(()=>import('./components/LazyCmp'))


function App() {
  return (
<div>
<Normal/>
  <Suspense fallback= {<FallbackCmp/>}>
<LazyCmp/>
</Suspense>


</div>
  );
}

export default App;
