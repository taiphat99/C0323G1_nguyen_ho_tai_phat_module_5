package com.api_exam_module_5.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "types")
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @JsonBackReference
    @OneToMany(mappedBy = "type")
    private Set <Cloth> clothSet;

    public Type() {
    }

    public Type(String name, Set<Cloth> clothSet) {
        this.name = name;
        this.clothSet = clothSet;
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

    public Set<Cloth> getClothSet() {
        return clothSet;
    }

    public void setClothSet(Set<Cloth> clothSet) {
        this.clothSet = clothSet;
    }
}
