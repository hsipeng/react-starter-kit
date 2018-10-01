import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

export default function AsyncLoad(opts) {
  return Loadable({
    ...opts,
    loading: Loading,
    delay: 200,
    timeout: 2000,
  });
}
