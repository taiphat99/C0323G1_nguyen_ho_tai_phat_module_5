package com.api_exam_module_5.controller;

import com.api_exam_module_5.model.Cloth;
import com.api_exam_module_5.model.Type;
import com.api_exam_module_5.service.ClothService;
import com.api_exam_module_5.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin("*")
public class RestController {

    @Autowired
    private ClothService clothService;

    @Autowired
    private TypeService typeService;

    @GetMapping("cloths")
    public ResponseEntity <Page<Cloth>> getAllCloths(@RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "5") int limit,
                                               @RequestParam(defaultValue = "") String searchName){
        Pageable pageable = PageRequest.of(page,limit);

        Page<Cloth> clothPage = clothService.getAll(pageable,searchName);

        if (clothPage.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(clothPage,HttpStatus.OK);
    }

    @GetMapping("cloths/{id}")
    public ResponseEntity <Cloth> getById(@PathVariable(name = "id") Integer id){
        Cloth getById = clothService.getById(id);
        if (getById == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(getById,HttpStatus.OK);
    }


    @GetMapping("types")
    public ResponseEntity <List<Type>> getAllTypes(){
        List <Type> typeList = typeService.getAll();
        if(typeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeList,HttpStatus.OK);
    }


}
