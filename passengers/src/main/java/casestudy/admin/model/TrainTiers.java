package casestudy.admin.model;

public class TrainTiers {
	public int ac1;
    public int ac2;
    public int ac3;
    public int sleeper;

    protected TrainTiers(){}
    

    
    public int getAc2() {
		return ac2;
	}



	public void setAc2(int ac2) {
		this.ac2 = ac2;
	}



	public int getAc3() {
		return ac3;
	}



	public void setAc3(int ac3) {
		this.ac3 = ac3;
	}



	public int getAc1() {
        return ac1;
    }

    public void setAc1(int ac1) {
        this.ac1 = ac1;
    }

    public int getSleeper() {
        return sleeper;
    }

    public void setSleeper(int sleeper) {
        this.sleeper = sleeper;
    }
}
