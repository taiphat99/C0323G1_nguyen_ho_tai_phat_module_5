package com.api_exam_module_5.service;

import com.api_exam_module_5.model.Type;
import com.api_exam_module_5.repository.ITypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeService {
    @Autowired
    private ITypeRepository typeRepository;

    public List<Type> getAll(){
        return typeRepository.getAll();
    }
}
