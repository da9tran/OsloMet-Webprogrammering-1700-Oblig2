import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class KundeController {
        private final List<Kunde> alleKunder = new ArrayList<>();

        @GetMapping("/lagre")
        public void lagreKunde(Kunde innKunde) {
            alleKunder.add(innKunde);
        }

        @GetMapping("/hentAlle")
        public List<Kunde> hentAlle() {
            return alleKunder;
        }

        @GetMapping("/slettAlle")
        public void slettAlle() {
            alleKunder.clear();
        }
    }
