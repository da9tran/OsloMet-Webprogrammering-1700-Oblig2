public class Kunde {
    private String filmer;
    private int antall;
    private String fornavn;
    private String etternavn;
    private String telefonnr;
    private String epost;

    public Kunde (String filmer, int antall, String fornavn, String etternavn, String telefonnr, String epost){
        this.filmer = filmer;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
    }

    public Kunde(){}

    public String getFilmer(){
        return filmer;
    }

    public void setFilmer(String filmer){
        this.filmer = filmer;
    }

    public int getAntall(){
        return antall;
    }

    public void setAntall(int antall){
        this.antall = antall;
    }

    public String getFornavn(){
        return fornavn;
    }

    public void setFornavn(String fornavn){
        this.fornavn = fornavn;
    }

    public String getEtternavn(){
        return etternavn;
    }

    public void setEtternavn(String etternavn){
        this.etternavn = etternavn;
    }

    public String getTelefonnr(){
        return telefonnr;
    }

    public void setTelefonnr(String telefonnr){
        this.telefonnr = telefonnr;
    }

    public String getEpost(){
        return epost;
    }

    public void setEpost(String epost){
        this.epost = epost;
    }
}
