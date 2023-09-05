package com.api_exam_module_5.repository;

import com.api_exam_module_5.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ITypeRepository extends JpaRepository <Type,Integer>{
    @Query (value = "select * from types",nativeQuery = true)
    List<Type> getAll ();
}
