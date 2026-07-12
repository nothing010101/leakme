import {i as e, n as t, o as n, r, t as i} from "../assets/jsx-runtime-CAE3TbpD.js";
import {n as a, t as o} from "../assets/SignalDeck_67-DwCTdIp6.js";
var s = e(( () => {
    var e = n(r())
      , s = t();
    a();
    var c = i()
      , l = document.getElementById(`signaldeck-data`)
      , u = l ? JSON.parse(l.textContent) : void 0;
    (0,
    s.createRoot)(document.getElementById(`react-root`)).render((0,
    c.jsx)(e.StrictMode, {
        children: (0,
        c.jsx)(o, {
            initialData: u
        })
    }))
}
));
export default s();
