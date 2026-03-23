package com.curewell.backend.service.impl;

import com.curewell.backend.entity.Surgery;
import com.curewell.backend.repository.SurgeryRepository;
import com.curewell.backend.service.SurgeryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class SurgeryServiceImpl implements SurgeryService {

    @Autowired
    private SurgeryRepository surgeryRepository;

    @Override
    public Surgery addSurgery(Surgery surgery) {

        return surgeryRepository.save(surgery);
    }

    @Override
    public List<Surgery> getTodaySurgeries() {

        return surgeryRepository.findBySurgeryDate(LocalDate.now());
    }

    @Override
    public Surgery updateSurgery(int id, Surgery surgery) {

        Surgery existing = surgeryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Surgery not found with id: " + id));
        existing.setStartTime(surgery.getStartTime());
        existing.setEndTime(surgery.getEndTime());
        existing.setSurgeryCategory(surgery.getSurgeryCategory());

        return surgeryRepository.save(existing);
    }

    @Override
    public void deleteSurgery(int id) {
        surgeryRepository.deleteById(id);
    }
}