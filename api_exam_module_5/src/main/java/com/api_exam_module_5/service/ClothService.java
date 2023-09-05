package com.api_exam_module_5.service;

import com.api_exam_module_5.model.Cloth;
import com.api_exam_module_5.repository.IClothRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;



@Service
public class ClothService {
    @Autowired
    private IClothRepository clothRepository;
    public Page<Cloth> getAll(Pageable pageable,String searchName){
        String name = "%"+searchName+"%";
        return clothRepository.searchByName(pageable,name);
    }
    public Cloth getById(Integer id){
        return clothRepository.getById(id);
    }
}
