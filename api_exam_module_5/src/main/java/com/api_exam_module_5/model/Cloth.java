package com.api_exam_module_5.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "cloths")
public class Cloth {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private Date date;
    private int quantity;
    @ManyToOne
    @JoinColumn(name = "type_id",referencedColumnName = "id")
    private Type type;

    public Cloth() {
    }

    public Cloth(String name, Date date, int quantity, Type type) {
        this.name = name;
        this.date = date;
        this.quantity = quantity;
        this.type = type;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }
}
