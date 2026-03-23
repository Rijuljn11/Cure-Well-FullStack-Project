package com.curewell.backend.service;

import com.curewell.backend.entity.Surgery;
import java.util.List;

public interface SurgeryService {

    Surgery addSurgery(Surgery surgery);

    List<Surgery> getTodaySurgeries();

    Surgery updateSurgery(int id, Surgery surgery);

    void deleteSurgery(int id);
}