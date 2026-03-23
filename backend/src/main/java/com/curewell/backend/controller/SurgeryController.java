package com.curewell.backend.controller;

import com.curewell.backend.entity.Surgery;
import com.curewell.backend.service.SurgeryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class SurgeryController {

    @Autowired
    private SurgeryService surgeryService;

    @GetMapping("/today")
    public List<Surgery> getTodaySurgeries() {
        return surgeryService.getTodaySurgeries();
    }

    @PostMapping("/surgeries")
    public Surgery addSurgery(@RequestBody Surgery surgery) {

        return surgeryService.addSurgery(surgery);
    }

    @DeleteMapping("/surgeries/{id}")
    public void deleteSurgery(@PathVariable int id) {
        surgeryService.deleteSurgery(id);
    }

    @PutMapping("/{id}")
    public Surgery updateSurgery(@PathVariable int id, @RequestBody Surgery surgery) {
        return surgeryService.updateSurgery(id, surgery);
    }

}