package com.product.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

@Entity
public class Product {
	
	@Id
	@NotNull
	private int product_id;
	private int serial_no;
	private String product_name;
	private int product_quantity;
	private int product_price;
	private int total_price;
	
	public Product() {
		super();
	}

	public Product(int product_id, int serial_no, String product_name, int product_quantity, int product_price,
			int total_price) {
		super();
		this.product_id = product_id;
		this.serial_no = serial_no;
		this.product_name = product_name;
		this.product_quantity = product_quantity;
		this.product_price = product_price;
		this.total_price = total_price;
	}

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public int getSerial_no() {
		return serial_no;
	}

	public void setSerial_no(int serial_no) {
		this.serial_no = serial_no;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public int getProduct_quantity() {
		return product_quantity;
	}

	public void setProduct_quantity(int product_quantity) {
		this.product_quantity = product_quantity;
	}

	public int getProduct_price() {
		return product_price;
	}

	public void setProduct_price(int product_price) {
		this.product_price = product_price;
	}

	public int getTotal_price() {
		return total_price;
	}

	public void setTotal_price(int total_price) {
		this.total_price = total_price;
	}

	@Override
	public String toString() {
		return "Product [product_id=" + product_id + ", serial_no=" + serial_no + ", product_name=" + product_name
				+ ", product_quantity=" + product_quantity + ", product_price=" + product_price + ", total_price="
				+ total_price + "]";
	}
	
	

}
