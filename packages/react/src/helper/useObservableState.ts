import * as React from 'react';
import { Observable } from 'rxjs';

/**
 * @internal
 */
export function useObservableState<T>(observable: Observable<T>, startWith: T) {
  const [state, setState] = React.useState<T>(startWith);
  React.useEffect(() => {
    // observable state doesn't run in SSR
    if (typeof window === 'undefined') return;
    const subscription = observable.subscribe(setState);
    return () => subscription.unsubscribe();
  }, [observable]);
  return state;
}
