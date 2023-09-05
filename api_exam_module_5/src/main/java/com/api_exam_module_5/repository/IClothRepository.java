package com.api_exam_module_5.repository;

import com.api_exam_module_5.model.Cloth;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface IClothRepository extends JpaRepository<Cloth, Integer> {

    @Query(value = "select * from cloths where name like :name " , nativeQuery = true)
    Page<Cloth> searchByName(Pageable pageable, @Param("name") String name);

    @Query(value = "select * from cloths where id = :id", nativeQuery = true)
    Cloth getById(@Param("id") Integer id);

}
